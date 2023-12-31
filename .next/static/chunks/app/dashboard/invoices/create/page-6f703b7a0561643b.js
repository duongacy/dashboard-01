(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{168:function(e,t,s){Promise.resolve().then(s.bind(s,8601)),Promise.resolve().then(s.t.bind(s,8326,23))},8601:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var a=s(7437),r=s(4203),i=s(9931),n=s(6906),l=s(8110),o=s(1865),d=s(9863),c=s(1095),m=s(2929),u=s(7805),x=s(1396),p=s.n(x);let b={customer_id:"",amount:0,date:new Date().toISOString().split("T")[0],status:"paid"};function g(e){let{customers:t}=e,{register:s,handleSubmit:x,watch:g,formState:{errors:f}}=(0,o.cI)({values:b,resolver:(0,l.F)(r.XY)});return(0,a.jsxs)("form",{onSubmit:x(e=>{(0,i.Z)(r.XY.parse(e),"/dashboard/invoices","/dashboard/invoices")}),children:[(0,a.jsxs)("div",{className:"rounded-md bg-gray-50 p-4 md:p-6",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"customer",className:"mb-2 block text-sm font-medium",children:"Choose customer"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("select",{id:"customer",className:"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500",...s("customer_id"),children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select a customer"}),t.map(e=>(0,a.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,a.jsx)(d.Z,{className:"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"})]}),f.customer_id&&(0,a.jsx)("small",{className:"text-red-600",children:f.customer_id.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"amount",className:"mb-2 block text-sm font-medium",children:"Choose an amount"}),(0,a.jsxs)("div",{className:"relative mt-2 rounded-md",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{id:"amount",type:"number",step:"0.01",placeholder:"Enter USD amount",className:"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500",...s("amount")}),(0,a.jsx)(c.Z,{className:"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"})]}),f.amount&&(0,a.jsx)("small",{className:"text-red-600",children:f.amount.message})]})]}),(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{className:"mb-2 block text-sm font-medium",children:"Set the invoice status"}),(0,a.jsx)("div",{className:"rounded-md border border-gray-200 bg-white px-[14px] py-3",children:(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{id:"pending",type:"radio",value:"pending",className:"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2",...s("status")}),(0,a.jsxs)("label",{htmlFor:"pending",className:"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600",children:["Pending ",(0,a.jsx)(m.Z,{className:"h-4 w-4"})]})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{id:"paid",type:"radio",value:"paid",className:"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2",...s("status")}),(0,a.jsxs)("label",{htmlFor:"paid",className:"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white",children:["Paid ",(0,a.jsx)(u.Z,{className:"h-4 w-4"})]})]})]})})]})]}),(0,a.jsxs)("div",{className:"mt-6 flex justify-end gap-4",children:[(0,a.jsx)(p(),{href:"/dashboard/invoices",className:"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200",children:"Cancel"}),(0,a.jsx)(n.z,{type:"submit",children:"Create Invoice"})]})]})}},4203:function(e,t,s){"use strict";s.d(t,{XY:function(){return n},aS:function(){return l}});var a=s(4578);let r=a.z.object({id:a.z.string(),name:a.z.string(),email:a.z.string(),image_url:a.z.string()});r.omit({id:!0}),r.pick({id:!0,name:!0}),r.extend({total_invoices:a.z.coerce.number(),total_pending:a.z.coerce.number(),total_paid:a.z.coerce.number()});let i=a.z.object({id:a.z.string(),customer_id:a.z.string().min(4,{message:"Please enter a valid value"}),amount:a.z.coerce.number().min(1,{message:"Please enter a valid value"}),date:a.z.string(),status:a.z.enum(["pending","paid"])}),n=i.omit({id:!0}),l=i.omit({date:!0});a.z.intersection(i.pick({id:!0,amount:!0,date:!0,status:!0}),r.pick({name:!0,email:!0,image_url:!0})),a.z.intersection(i.pick({id:!0,amount:!0}),r.pick({name:!0,email:!0,image_url:!0}))},9931:function(e,t,s){"use strict";s.d(t,{Z:function(){return r},a:function(){return i}}),s(5231),s(470);var a=s(1162),r=(0,a.$)("29c3a8a0fddbf8c36f058e28a0a58616c1ef0654"),i=(0,a.$)("098eba37e8ee8ca2d3d0b9f590a33e971e5f7771")},6906:function(e,t,s){"use strict";s.d(t,{z:function(){return i}});var a=s(7437),r=s(7042);function i(e){let{children:t,className:s,...i}=e;return(0,a.jsx)("button",{...i,className:(0,r.Z)("flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",s),children:t})}}},function(e){e.O(0,[326,691,971,472,744],function(){return e(e.s=168)}),_N_E=e.O()}]);