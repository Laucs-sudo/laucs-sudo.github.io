import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Rocket, ArrowRight, Zap, Target, Clock } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const PROFILE_IMAGE = "https://yt3.googleusercontent.com/TesDTcuPlaWa9585lByYXIA4ZjkZS2zHLml5mbL1iaNgj_PGqwj25AcVXxPnZgdmFScudAHJxt8=s800-c-k-c0x00ffffff-no-rj"

export function App() {
const containerRef = useRef(null)
const { scrollYProgress } = useScroll({ container: containerRef })

const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.03, 0])
const bgY = useTransform(scrollYProgress, [0, 1], [0, -100])
const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.4])
const bgBlur = useTransform(scrollYProgress, [0, 1], [120, 200])

return (
<div
ref={containerRef}
className="relative h-screen bg-black text-white font-sans overflow-y-auto overflow-x-hidden scroll-smooth"
>
<motion.div
className="fixed inset-0 bg-cover bg-center pointer-events-none will-change-transform"
style={{
backgroundImage: url(${PROFILE_IMAGE}),
opacity: bgOpacity,
y: bgY,
scale: bgScale
}}
/>

<motion.div
className="fixed inset-0 pointer-events-none"
style={{
backdropFilter: useTransform(bgBlur, v => blur(${v}px)),
WebkitBackdropFilter: useTransform(bgBlur, v => blur(${v}px))
}}
/>

<div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none" />
<div className="fixed inset-0 bg-gradient-to-tr from-neutral-950/50 via-transparent to-neutral-900/30 pointer-events-none" />

<div className="relative z-10 min-h-screen flex items-center justify-center p-6 py-20">
<motion.main
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
className="w-full max-w-md"
>
<header className="text-center mb-12">
<motion.div
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
className="inline-block relative mb-8"
>
<div className="absolute -inset-8 rounded-full bg-white/5 blur-3xl" />
<div className="absolute -inset-4 rounded-full bg-white/3 blur-xl" />

<div className="relative">
<div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-neutral-700 to-neutral-900" />
<img
src={PROFILE_IMAGE}
alt="Laucs"
className="w-28 h-28 rounded-full relative z-10 shadow-2xl"
/>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 15 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.25 }}
>
<h1 className="text-4xl font-semibold tracking-tight mb-4">Laucs</h1>
<p className="text-neutral-500 text-lg mb-5 font-light">I write code. I build things. I improve through practice.</p>

<div className="flex items-center justify-center gap-3">
<Badge variant="outline" className="px-4 py-1.5 text-xs tracking-wide">Developer</Badge>
<Badge variant="secondary" className="px-4 py-1.5 text-xs tracking-wide">Indie</Badge>
</div>
</motion.div>
</header>

<motion.div
initial={{ opacity: 0, y: 25 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, delay: 0.4 }}
>
<Card className="p-6 backdrop-blur-xl bg-neutral-950/60 border-neutral-800/80">
<Accordion type="single" collapsible className="w-full">

<AccordionItem value="build">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Code2 className="w-4 h-4" />
<span className="font-medium">What I Build</span>
</div>
</AccordionTrigger>
<AccordionContent>
I build websites. I focus on clear structure and strong function.
</AccordionContent>
</AccordionItem>

<AccordionItem value="transition">
<AccordionTrigger>
<div className="flex items-center gap-3">
<ArrowRight className="w-4 h-4" />
<span className="font-medium">Transition</span>
</div>
</AccordionTrigger>
<AccordionContent>
I started with HTML, CSS, and JavaScript. I moved to React in time. I improved through steady work.
</AccordionContent>
</AccordionItem>

<AccordionItem value="focus">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Target className="w-4 h-4" />
<span className="font-medium">Focus</span>
</div>
</AccordionTrigger>
<AccordionContent>
I focus on web projects. I write C++ when needed.
</AccordionContent>
</AccordionItem>

<AccordionItem value="experience">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Zap className="w-4 h-4" />
<span className="font-medium">Experience</span>
</div>
</AccordionTrigger>
<AccordionContent>
My experience grows with each project. This site shows my progress.
</AccordionContent>
</AccordionItem>

<AccordionItem value="timeline">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Clock className="w-4 h-4" />
<span className="font-medium">Timeline</span>
</div>
</AccordionTrigger>
<AccordionContent>
I used HTML, CSS, and JavaScript in 2020. I moved to React in 2025. This is my first React build.
</AccordionContent>
</AccordionItem>

<AccordionItem value="next">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Rocket className="w-4 h-4" />
<span className="font-medium">Next Step</span>
</div>
</AccordionTrigger>
<AccordionContent>
I plan to start a UGC game company in 2026.
</AccordionContent>
</AccordionItem>

<AccordionItem value="neocities">
<AccordionTrigger>
<div className="flex items-center gap-3">
<Clock className="w-4 h-4" />
<span className="font-medium">Neocities Site</span>
</div>
</AccordionTrigger>
<AccordionContent>
The old site used HTML, CSS, and JavaScript. I moved you here for a cleaner build.
</AccordionContent>
</AccordionItem>

</Accordion>
</Card>
</motion.div>

<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, delay: 0.8 }}
className="mt-12 text-center"
>
<div className="w-8 h-px bg-neutral-800 mx-auto" />
</motion.div>
</motion.main>
</div>
</div>
)
}
