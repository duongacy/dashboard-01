import { sql } from '@vercel/postgres';
import { TCustomerSelectOption, TCustomerTableRow } from '../schemas/customer';
import { unstable_noStore } from 'next/cache';
const ITEMS_PER_PAGE = 6;

export async function fetchCustomers() {
  try {
    const data = await sql<TCustomerSelectOption>`
        SELECT
          id,
          name
        FROM customers
        ORDER BY name ASC
      `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(
  query: string,
  currentPage: number,
) {
  unstable_noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const invoices = await sql<TCustomerTableRow>`
        select name, email, image_url
        from customers
        where 
        name ilike ${`%${query}%`}
        limit ${ITEMS_PER_PAGE} offset ${offset}
      `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch customers.');
  }
}

export async function fetchCustomersPages(query: string) {
  unstable_noStore();
  try {
    const count = await sql`SELECT COUNT(*)
        FROM customers
      `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchCustomersCount() {
  unstable_noStore();
  const data = await sql`SELECT COUNT(*) FROM customers`;
  return Number(data.rows[0].count || 0);
}
