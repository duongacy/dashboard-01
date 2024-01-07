export async function getInvoicesCount() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return 5;
}
