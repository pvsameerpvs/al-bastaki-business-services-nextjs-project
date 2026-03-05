
'use client'

const services=[
"Company Formation",
"Business Setup",
"Accounting Services",
"Consultancy Services",
"Event Management",
"IT Services"
]

export default function Services(){
return(
<section className="py-20 bg-lightGrey">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Our Business Services
</h2>

<div className="grid md:grid-cols-3 gap-8">

{services.map((s,i)=>(
<div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
<h3 className="text-xl font-semibold mb-3">{s}</h3>
<p className="text-gray-600">
Professional solutions tailored for modern businesses in Dubai.
</p>
</div>
))}

</div>

</div>
</section>
)
}
