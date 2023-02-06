import Home from "@layouts/home";

interface IProps {
  children: JSX.Element
  title: string
}

export default function Auth({ children, title }: IProps) : JSX.Element {
  return (
    <Home>
      <section className="bg-white dark:bg-gray-900">
        <div className="w-1/2 mx-auto">
          <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">

            <h1 className="mt-4 font-semibold tracking-wide text-center text-gray-800 capitalize md:text-3xl dark:text-white">
              { title }
            </h1>

            <div className="w-full max-w-md mx-auto mt-6">
              {children}
            </div>
          </div>
        </div>

      </section>
    </Home>
  )
}