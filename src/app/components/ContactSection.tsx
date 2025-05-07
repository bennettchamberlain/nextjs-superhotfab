export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 flex flex-col items-center bg-gradient-to-t from-black via-red-950 to-black">
      <h2 className="text-3xl font-bold mb-6 text-red-400">Contact Us</h2>
      <div className="flex flex-col items-center gap-4 bg-black/80 p-8 rounded-2xl border-4 border-red-400 shadow-xl">
        <div className="tv-mask w-12 h-12 bg-black border-2 border-red-400 mb-2" />
        <p className="text-lg text-red-200">Email: <a href="mailto:help@superhotfab.com" className="underline hover:text-yellow-400">help@superhotfab.com</a></p>
        <p className="text-lg text-red-200">Phone: <span className="font-mono">(555) 123-4567</span></p>
      </div>
    </section>
  );
}
// Add tv-mask CSS in globals.css for the bulging square effect. 