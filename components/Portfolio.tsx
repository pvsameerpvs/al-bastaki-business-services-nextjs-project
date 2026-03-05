
export default function Portfolio(){
return(
<section className="py-20 bg-lightGrey">
<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-12">
Case Studies
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[1,2,3].map(i=>(
<div key={i} className="bg-white rounded-xl h-64 shadow hover:shadow-xl transition"></div>
))}

</div>

</div>
</section>
)
}
