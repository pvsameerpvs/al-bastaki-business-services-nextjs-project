
export default function Process(){
const steps=[
"Business Consultation",
"Legal Setup",
"Documentation",
"Business Launch"
]

return(
<section className="py-20">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Our Process
</h2>

<div className="grid md:grid-cols-4 gap-8 text-center">

{steps.map((s,i)=>(
<div key={i} className="p-6 rounded-xl shadow">
<h3 className="font-semibold">{s}</h3>
</div>
))}

</div>

</div>
</section>
)
}
