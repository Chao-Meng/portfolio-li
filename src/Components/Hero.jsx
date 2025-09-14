
export default function Hero(){

    return(
        <section className="mx-auto max-w-6xl py-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
            <h1 className="text-2xl font-bold text-zinc-400">WELCOME</h1>
            <p className="text-4xl font-bold ">Hi, I'm Kevin</p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-prose">A passionate full-stack developer crafting seamless web experiences.</p>
            <div className="flex gap-6">
                <a className="py-2 px-4 rounded-xl bg-zinc-500 text-white" href="Lingxiao_Li_Resume.pdf">Download CV</a>
                <a className="py-2 px-4 rounded-xl bg-zinc-500 text-white"  href="mailto:lingxiao.li@ontariotechu.net">Contact</a>
            </div>
            </div>
            <div className="relative h-[420px] sm:h-[480px]
            overflow-hidden rounded-3xl">
            <img className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_85%,transparent)] " src="/kevin.png" alt="avatar"/>
            </div>
        </section>
    )
}