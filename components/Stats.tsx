
'use client'
import CountUp from 'react-countup'

export default function Stats(){
return(
<section className="bg-lightGrey py-20">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8">

<div>
<h3 className="text-4xl font-bold text-primary">
<CountUp end={20} duration={3}/>+
</h3>
<p>Years Experience</p>
</div>

<div>
<h3 className="text-4xl font-bold text-primary">
<CountUp end={500} duration={3}/>+
</h3>
<p>Businesses Established</p>
</div>

<div>
<h3 className="text-4xl font-bold text-primary">
<CountUp end={1200} duration={3}/>+
</h3>
<p>Clients Served</p>
</div>

<div>
<h3 className="text-4xl font-bold text-primary">
<CountUp end={98} duration={3}/>%
</h3>
<p>Client Satisfaction</p>
</div>

</div>
</section>
)
}
