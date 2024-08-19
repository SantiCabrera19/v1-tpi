/**

*/

/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'
import { Judson } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function PaginaSpa() {
  return (
    (<div className="bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SpadeIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Spa Oasis</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Acceso personal
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Acceso de clientes
          </Link>
        </nav>
      </header>
      <main>
        <section className="relative h-[70vh] md:h-[80vh]">
          <img
            src="/image.png"
            alt="Spa Oasis Cover"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }} />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Escapa al Spa Oasis</h1>
            <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
              Experimenta lo máximo en relajación y rejuvenecimiento en nuestro lujoso spa. Disfruta de nuestros
              tratamientos exclusivos y promociones.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Ver productos
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Más información
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 flex justify-center items-center">
  <div className="container mx-auto">
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-4 text-center">
        <GiftIcon className="h-12 w-12 text-primary mx-auto" />
        <h3 className="text-xl font-semibold">Masajes relajantes</h3>
        <p className="text-muted-foreground">
          Disfruta de nuestros tratamientos de masaje exclusivos, diseñados para eliminar el estrés y la tensión.
        </p>
      </div>
      <div className="space-y-4 text-center">
        <SmileIcon className="h-12 w-12 text-primary mx-auto" />
        <h3 className="text-xl font-semibold">Faciales rejuvenecedores</h3>
        <p className="text-muted-foreground">
          Revitaliza tu piel con nuestros lujosos tratamientos faciales, adaptados a tus necesidades individuales.
        </p>
      </div>
      <div className="space-y-4 text-center">
        <BathIcon className="h-12 w-12 text-primary mx-auto" />
        <h3 className="text-xl font-semibold">Rituales relajantes</h3>
        <p className="text-muted-foreground">
          Relájate en nuestras tranquilas instalaciones del spa, incluyendo saunas, baños de vapor y salas de relajación.
        </p>
      </div>
    </div>
  </div>
</section>
        <section className="bg-muted py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <img
                  src="/LogoTPI.png"
                  alt="Spa Oasis About"
                  className="h-full w-full rounded-lg object-cover"
                  width={800}
                  height={600}
                  style={{ aspectRatio: "800/500", objectFit: "cover" }} />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Acerca de Spa Oasis</h2>
                <p className="text-muted-foreground md:text-lg">
                  Spa Oasis es un lujoso retiro dedicado a brindar experiencias de bienestar excepcionales. Nuestro
                  equipo de terapeutas y esteticistas capacitados se compromete a ayudarte a alcanzar un estado de
                  relajación profunda y rejuvenecimiento.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Ubicado en un entorno natural sereno, nuestro spa ofrece un escape tranquilo de las tensiones de la
                  vida cotidiana. Disfruta de nuestra gama de tratamientos exclusivos, desde masajes relajantes hasta
                  faciales revitalizantes, y déjanos ayudarte a relajarte y recargarte.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Más información
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nuestros valores</h2>
                <p className="text-muted-foreground md:text-lg">
                  En Spa Oasis, nos comprometemos a brindar una experiencia de bienestar excepcional a nuestros
                  clientes. Nuestros valores fundamentales incluyen:
                </p>
                <ul className="space-y-2 text-muted-foreground md:text-lg">
                  <li>- Excelencia en el servicio</li>
                  <li>- Atención personalizada</li>
                  <li>- Sostenibilidad ambiental</li>
                  <li>- Bienestar integral</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contáctanos</h2>
                <p className="text-muted-foreground md:text-lg">
                  Estamos aquí para ayudarte a planificar tu experiencia de spa perfecta. Ponte en contacto con nuestro
                  equipo para obtener más información sobre nuestros servicios, hacer una reserva o consultar sobre
                  nuestras promociones exclusivas.
                </p>
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre" className="w-full" />
                  <Input type="email" placeholder="Correo electrónico" className="w-full" />
                  <Textarea placeholder="Mensaje" className="w-full" />
                  <Button type="submit" className="w-full">
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-sm">
        <div
          className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground">&copy; 2024 Spa Oasis. Todos los derechos reservados.</p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Política de privacidad
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline underline-offset-4"
              prefetch={false}>
              Términos de servicio
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function BathIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>)
  );
}


function GiftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path
        d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>)
  );
}


function SmileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>)
  );
}


function SpadeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
      <path d="M12 18v4" />
    </svg>)
  );
}
