exports.id=51,exports.ids=[51],exports.modules={9757:(e,t,a)=>{let n={"0733aa559aba48ae336fed4d002ae146755c4b15":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchCustomersPages),a77a66c24783400dcd8d6da53a33b0ce45b7b780:()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchLatestInvoices),b08a3b7b35e07a7557ad369ac5e98ce3a20d41b5:()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchPendingInvoicesCount),"24758eccb707b1f03a0c10892f6178079656f86b":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchInvoicesCount),"6e188da532e3fb25ada7d395f96d8c102e5225cb":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchCustomersCount),b7ee1a77d84195f08287cebfa73419f927236181:()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchPaidInvoicesCount),"373935d1c396f1e6d37e71b16efb5c5be8b84780":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchInvoicesPages),"2147489e24562a7ceb47efdcc2a24aa84c84cf6d":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchInvoiceById),"963ecf652383c5823efa8c09597a6bd01a91c178":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchCustomers),"09adc73d282e319d89dfd1f4919e4df9df31586a":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchCardData),"3705de91522f59cfb8aa1179cab3adcd1337fb79":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchFilteredInvoices),fe22b550215a02a53596603f92d543ef83ff2987:()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchRevenue),"9b76d3122e4986b056722a8a002a01f895689d5d":()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.fetchFilteredCustomers),bd25b8d7673f84071feb106fbb8d84a98de9dc62:()=>Promise.resolve().then(a.bind(a,5478)).then(e=>e.getUser)};async function s(e,...t){let a=await n[e]();return a.apply(null,t)}e.exports={"0733aa559aba48ae336fed4d002ae146755c4b15":s.bind(null,"0733aa559aba48ae336fed4d002ae146755c4b15"),a77a66c24783400dcd8d6da53a33b0ce45b7b780:s.bind(null,"a77a66c24783400dcd8d6da53a33b0ce45b7b780"),b08a3b7b35e07a7557ad369ac5e98ce3a20d41b5:s.bind(null,"b08a3b7b35e07a7557ad369ac5e98ce3a20d41b5"),"24758eccb707b1f03a0c10892f6178079656f86b":s.bind(null,"24758eccb707b1f03a0c10892f6178079656f86b"),"6e188da532e3fb25ada7d395f96d8c102e5225cb":s.bind(null,"6e188da532e3fb25ada7d395f96d8c102e5225cb"),b7ee1a77d84195f08287cebfa73419f927236181:s.bind(null,"b7ee1a77d84195f08287cebfa73419f927236181"),"373935d1c396f1e6d37e71b16efb5c5be8b84780":s.bind(null,"373935d1c396f1e6d37e71b16efb5c5be8b84780"),"2147489e24562a7ceb47efdcc2a24aa84c84cf6d":s.bind(null,"2147489e24562a7ceb47efdcc2a24aa84c84cf6d"),"963ecf652383c5823efa8c09597a6bd01a91c178":s.bind(null,"963ecf652383c5823efa8c09597a6bd01a91c178"),"09adc73d282e319d89dfd1f4919e4df9df31586a":s.bind(null,"09adc73d282e319d89dfd1f4919e4df9df31586a"),"3705de91522f59cfb8aa1179cab3adcd1337fb79":s.bind(null,"3705de91522f59cfb8aa1179cab3adcd1337fb79"),fe22b550215a02a53596603f92d543ef83ff2987:s.bind(null,"fe22b550215a02a53596603f92d543ef83ff2987"),"9b76d3122e4986b056722a8a002a01f895689d5d":s.bind(null,"9b76d3122e4986b056722a8a002a01f895689d5d"),bd25b8d7673f84071feb106fbb8d84a98de9dc62:s.bind(null,"bd25b8d7673f84071feb106fbb8d84a98de9dc62")}},4856:(e,t,a)=>{Promise.resolve().then(a.bind(a,3924)),Promise.resolve().then(a.t.bind(a,7490,23))},5433:()=>{},3956:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,3579,23)),Promise.resolve().then(a.t.bind(a,619,23)),Promise.resolve().then(a.t.bind(a,1459,23)),Promise.resolve().then(a.t.bind(a,3456,23)),Promise.resolve().then(a.t.bind(a,847,23)),Promise.resolve().then(a.t.bind(a,7303,23))},3924:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var n=a(3854),s=a(7121),r=a(3774),c=a(2769),o=a(9395),d=a(5548),i=a.n(d),l=a(1018);let u=[{name:"Home",href:"/dashboard",icon:s.Z},{name:"Invoices",href:"/dashboard/invoices",icon:r.Z},{name:"Customers",href:"/dashboard/customers",icon:c.Z}];function f(){let e=(0,l.usePathname)();return n.jsx(n.Fragment,{children:u.map(t=>{let a=t.icon,s=e===t.href;return(0,n.jsxs)(i(),{href:t.href,className:(0,o.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":s}),children:[n.jsx(a,{className:"w-6"}),n.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},6971:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(4656),s=a(4353),r=a.n(s),c=a(5153);let o=(0,c.createProxy)(String.raw`/Users/y/Desktop/react/nextjs/dashboard/dashboard-01/app/ui/dashboard/nav-links.tsx`),{__esModule:d,$$typeof:i}=o,l=o.default;var u=a(8132),f=a(2727);function b(){return(0,n.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[n.jsx(r(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:n.jsx("div",{className:"w-32 text-white md:w-40",children:n.jsx(u.Z,{})})}),(0,n.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[n.jsx(l,{}),n.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),n.jsx("form",{children:(0,n.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[n.jsx(f.Z,{className:"w-6"}),n.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}function m({children:e}){return(0,n.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[n.jsx("div",{className:"w-full flex-none md:w-64",children:n.jsx(b,{})}),n.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},5345:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(4656);a(5832);var s=a(4788),r=a.n(s);function c({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${r().className} antialiased`,children:e})})}},5478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{fetchCardData:()=>i,fetchCustomers:()=>v,fetchCustomersCount:()=>b,fetchCustomersPages:()=>w,fetchFilteredCustomers:()=>x,fetchFilteredInvoices:()=>m,fetchInvoiceById:()=>E,fetchInvoicesCount:()=>f,fetchInvoicesPages:()=>h,fetchLatestInvoices:()=>d,fetchPaidInvoicesCount:()=>l,fetchPendingInvoicesCount:()=>u,fetchRevenue:()=>o,getUser:()=>S});var n=a(4600);a(1639);var s=a(7590),r=a(1726),c=a(7747);async function o(){(0,r.unstable_noStore)();try{let e=await s.i6`SELECT * FROM revenue`;return e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function d(){(0,r.unstable_noStore)();try{let e=await s.i6`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`,t=e.rows.map(e=>({...e,amount:(0,c.xG)(e.amount)}));return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function i(){(0,r.unstable_noStore)();try{let e=s.i6`SELECT COUNT(*) FROM invoices`,t=s.i6`SELECT COUNT(*) FROM customers`,a=s.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,n=await Promise.all([e,t,a]),r=Number(n[0].rows[0].count??"0"),o=Number(n[1].rows[0].count??"0"),d=(0,c.xG)(n[2].rows[0].paid??"0"),i=(0,c.xG)(n[2].rows[0].pending??"0");return{numberOfCustomers:o,numberOfInvoices:r,totalPaidInvoices:d,totalPendingInvoices:i}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(){(0,r.unstable_noStore)();let e=await s.i6`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid"
         FROM invoices`;return e.rows[0].paid}async function u(){(0,r.unstable_noStore)();let e=await s.i6`SELECT
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;return e.rows[0].pending}async function f(){(0,r.unstable_noStore)();let e=await s.i6`SELECT COUNT(*) FROM invoices`;return Number(e.rows[0].count||0)}async function b(){(0,r.unstable_noStore)();let e=await s.i6`SELECT COUNT(*) FROM customers`;return Number(e.rows[0].count||0)}async function m(e,t){(0,r.unstable_noStore)();try{let a=await s.i6`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `;return a.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function h(e){(0,r.unstable_noStore)();try{let t=await s.i6`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `,a=Math.ceil(Number(t.rows[0].count)/6);return a}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function E(e){(0,r.unstable_noStore)();try{let t=await s.i6`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.date,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `;return t.rows[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function v(){try{let e=await s.i6`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `,t=e.rows;return t}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}async function x(e){(0,r.unstable_noStore)();try{let t=await s.i6`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `,a=t.rows.map(e=>({...e,total_pending:(0,c.xG)(e.total_pending),total_paid:(0,c.xG)(e.total_paid)}));return a}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch customer table.")}}async function w(e){(0,r.unstable_noStore)();try{return new Promise(e=>e(8))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function S(e){try{let t=await s.i6`SELECT * FROM users WHERE email=${e}`;return t.rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}(0,a(2990).h)([o,d,i,l,u,f,b,m,h,E,v,x,w,S]),(0,n.U)("fe22b550215a02a53596603f92d543ef83ff2987",null,o),(0,n.U)("a77a66c24783400dcd8d6da53a33b0ce45b7b780",null,d),(0,n.U)("09adc73d282e319d89dfd1f4919e4df9df31586a",null,i),(0,n.U)("b7ee1a77d84195f08287cebfa73419f927236181",null,l),(0,n.U)("b08a3b7b35e07a7557ad369ac5e98ce3a20d41b5",null,u),(0,n.U)("24758eccb707b1f03a0c10892f6178079656f86b",null,f),(0,n.U)("6e188da532e3fb25ada7d395f96d8c102e5225cb",null,b),(0,n.U)("3705de91522f59cfb8aa1179cab3adcd1337fb79",null,m),(0,n.U)("373935d1c396f1e6d37e71b16efb5c5be8b84780",null,h),(0,n.U)("2147489e24562a7ceb47efdcc2a24aa84c84cf6d",null,E),(0,n.U)("963ecf652383c5823efa8c09597a6bd01a91c178",null,v),(0,n.U)("9b76d3122e4986b056722a8a002a01f895689d5d",null,x),(0,n.U)("0733aa559aba48ae336fed4d002ae146755c4b15",null,w),(0,n.U)("bd25b8d7673f84071feb106fbb8d84a98de9dc62",null,S)},7747:(e,t,a)=>{"use strict";a.d(t,{p9:()=>s,tk:()=>r,xG:()=>n});let n=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),s=(e,t="en-US")=>{let a=new Date(e),n=new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"});return n.format(a)},r=e=>{let t=[],a=Math.max(...e.map(e=>e.revenue)),n=1e3*Math.ceil(a/1e3);for(let e=n;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:n}}},8132:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(4656),s=a(6070),r=a(7586),c=a.n(r);function o(){return(0,n.jsxs)("div",{className:`${c().className} flex flex-row items-center leading-none text-white`,children:[n.jsx(s.Z,{className:"h-12 w-12 rotate-[15deg]"}),n.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},5832:()=>{}};