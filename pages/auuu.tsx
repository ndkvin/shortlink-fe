import Link from "next/link";
import { useState } from "react";
import { AiOutlineLeft } from 'react-icons/ai'
import Navbar from "@components/dashboard/navbar"

export default function Auuu() {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex">
      <aside className={open ? "fixed top-0 left-0 z-40 flex-none flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700" : "hidden fixed top-0 left-0 z-40 flex-none flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700"}>

        <div className="flex">
          <Link href="/">
            <div className="font-bold text-xl px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md md:mt-0 dark:text-gray-200">Shortlink</div>
          </Link>
          <button className="ml-auto" onClick={e => setOpen(!open)}>
            <AiOutlineLeft className="text-gray-700 dark:text-gray-300" size={30} />
          </button>
        </div>


        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Dashboard</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Accounts</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Tickets</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Settings</span>
            </a>

            <hr className="my-6 border-gray-200 dark:border-gray-600" />

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Tickets</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="mx-4 font-medium">Settings</span>
            </a>
          </nav>

          <a href="#" className="flex items-center px-4 -mx-2">
            <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
            <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">John Doe</span>
          </a>
        </div>
      </aside>
      <div className={open ? "ml-64 text-gray-700 bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200" : "ml-0 text-gray-700 bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200"}>
        <Navbar login={false} sideOpen={open} setSideOpen={setOpen} />
        <div className="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, aliquid earum unde dolores amet omnis nesciunt ducimus labore quas. Ipsam provident debitis corporis vel molestias minus quos error nostrum quaerat, nesciunt libero repellendus voluptates. Minus autem alias dolore modi officiis odio. Temporibus doloribus, assumenda, maiores ipsum sequi accusantium quo facilis eum sapiente atque minima rem, quia illo sint tenetur voluptates blanditiis placeat eligendi. Quas, distinctio quia molestiae aperiam excepturi velit ullam minus officia similique, consectetur soluta earum. Excepturi, possimus. Distinctio sapiente eius repellat dolores atque! Earum sit consequuntur nobis facilis, impedit ratione corrupti obcaecati veritatis magni rem ea blanditiis, non aperiam quidem? Beatae, impedit voluptate eveniet nam ex placeat sint vero perspiciatis nostrum fugit architecto consequuntur corrupti voluptatem dolorum debitis voluptates temporibus! Ipsa magni saepe nihil perferendis! Ad aspernatur cumque non perferendis dicta rem cum iure eveniet unde omnis. Quae autem aspernatur soluta officiis libero porro earum dolores eligendi, dolor alias sed numquam reprehenderit possimus! Obcaecati eveniet vel officia, numquam, odio amet minus laborum fugiat esse eaque explicabo provident id fugit libero? Optio neque dolorum voluptate ea ipsam, suscipit qui soluta, corporis ipsa quod maiores animi dolores eveniet dolore est doloribus praesentium necessitatibus quae at, impedit illum nam esse! Cumque, commodi vel quae velit sed dicta ea animi ad. Nesciunt perferendis sed earum sapiente incidunt, soluta, delectus nemo ratione ad expedita voluptate tempore tempora pariatur. Ipsum eius nostrum, autem est sunt praesentium blanditiis voluptates quas optio deserunt eum omnis adipisci. Corporis tempore, tempora beatae rem obcaecati fuga, accusantium est autem expedita veniam inventore eaque voluptate eveniet. Ratione necessitatibus est eum? Alias, laboriosam eos. Consequatur, animi eligendi? Aliquid temporibus modi praesentium minus suscipit? Sunt eaque iure corporis quidem delectus error ullam nobis soluta explicabo, ratione, ut cupiditate cum expedita quaerat molestias alias laboriosam. Veritatis a aliquid quos ea natus suscipit, sequi recusandae necessitatibus nobis sint officiis cumque, quidem, quod qui omnis. Quibusdam eos neque deleniti dolorem itaque, cum temporibus quod nam earum dolores expedita consectetur voluptatem rem vel vitae nulla fugiat suscipit, reiciendis fugit rerum ipsa a vero sunt. Deserunt optio, accusantium aperiam provident eaque culpa deleniti excepturi rem sit minus sed, dolorem harum praesentium! Voluptatibus velit explicabo sit! Consequatur, neque amet voluptatibus rem nesciunt quod harum fuga ipsum aperiam consequuntur accusamus ex recusandae a. Placeat quo id facilis voluptatibus, adipisci, eligendi amet odit excepturi consectetur reprehenderit saepe aliquam at quasi totam quos quam vero eum ullam deleniti nihil quibusdam, magni odio nostrum ratione. Deleniti officia adipisci accusantium. Itaque quae excepturi pariatur a earum sit quos sapiente velit quis fuga, corporis praesentium assumenda architecto saepe expedita. Tempore ut, officiis veniam quo labore cum quas facere tempora nostrum minima aperiam unde ad cumque quidem? Mollitia, doloribus eius. Cumque laboriosam provident nisi in id autem repudiandae, excepturi fugit iste nam, ipsa accusantium fuga odit placeat voluptates assumenda adipisci ab! Doloribus placeat dicta similique fuga maxime labore laborum atque maiores quaerat nesciunt saepe delectus, iste nihil quisquam inventore facere mollitia veritatis hic fugit sapiente. Sapiente ullam quasi eos dolores nostrum qui dolorem quaerat. Sequi magni veniam nesciunt commodi illo pariatur maiores corrupti distinctio adipisci sunt doloribus at laboriosam quisquam incidunt consequatur exercitationem, a numquam? Aspernatur, aliquam mollitia itaque dolorum molestiae harum a deserunt enim reiciendis quod optio, omnis provident quisquam officia labore. Ab exercitationem iusto accusamus! Aliquid odit autem doloremque! Fugit doloribus vitae rerum officiis sed nam aliquid error, voluptatum iste, temporibus placeat explicabo? Molestiae, debitis et? Dicta iste iusto facilis incidunt quaerat nesciunt labore rerum consequuntur numquam ipsa veritatis, culpa repellat, vero ratione doloremque expedita cum magnam voluptate similique quia? Dolorum laudantium accusamus, alias totam omnis reiciendis nam, ipsum dolorem necessitatibus doloribus molestias officiis odio hic exercitationem deleniti facere eius? Tenetur sint, modi quis et corrupti voluptates itaque maiores cupiditate explicabo eveniet dolore est veniam consectetur blanditiis culpa nobis vitae dolores id nam ab quae voluptate aspernatur. Nesciunt, dignissimos. In autem ea molestiae, ducimus natus repudiandae explicabo obcaecati sapiente quos dolores nesciunt nisi facere repellendus earum, ex optio sed consequuntur hic voluptas cumque voluptates nihil, laudantium vel et! Consectetur omnis odit dolorem ea sunt aperiam quos repellendus, nihil porro, illum magni quam voluptate vero eos mollitia quaerat blanditiis harum ut eaque ratione veritatis tempora dolorum? At nulla excepturi, distinctio tenetur enim laborum magnam quo deserunt alias ullam ad vel minima aliquid possimus porro quasi labore unde repudiandae sunt repellat nihil assumenda non voluptas eveniet. Enim dignissimos cupiditate ut itaque non perferendis, inventore quaerat accusantium dolore aspernatur esse, quibusdam rem obcaecati sequi ipsa saepe, numquam laudantium? Provident magni exercitationem pariatur reprehenderit ab suscipit ullam quasi vero vitae officia consectetur porro nobis, aperiam minima voluptates eos ea quia, laborum fuga nesciunt ratione hic minus laudantium! Temporibus molestias ullam dolor nesciunt veniam deleniti, voluptate corporis aspernatur tenetur? Eveniet dolores excepturi aliquid, similique ad consequuntur laudantium totam a nobis perferendis. Id dolores temporibus hic ab velit ullam dolorem architecto, possimus, repellendus iste iusto libero facilis, ea sapiente earum quibusdam repellat quae maxime sit nisi illum sunt? Ea iste ad enim unde harum eaque aut tempore excepturi, saepe maxime nisi ratione sequi repellat qui earum dolore ipsum quod totam aliquid in, aspernatur sapiente! Est, dolore a. Voluptates fuga iste possimus illum quaerat, exercitationem rerum? Molestiae provident quisquam iusto rerum accusamus, natus nihil est error deleniti quo magnam veritatis cum dignissimos sapiente. Debitis sint quaerat ut? Reiciendis corporis doloribus perferendis nam amet aliquam! Ea ab at voluptatem reiciendis maiores vero ducimus? Porro possimus ipsam repellat, laborum dignissimos, maiores ex cupiditate, eos fugiat consectetur autem. Saepe quidem non architecto qui iure incidunt veniam repudiandae, sint excepturi dolorum rerum hic eos cumque cum consequuntur, voluptate dicta. Sunt quis magnam dolores aspernatur laboriosam quae nam ratione provident fuga natus earum, saepe vel deleniti dolorem aliquid explicabo nobis ad voluptate itaque optio ea illo. Illum cumque eos rem repellat cum. Assumenda possimus itaque ut similique aut asperiores ab corrupti minima optio, iste, quos dolor saepe quod? Voluptates ex, mollitia ea facilis rem saepe beatae accusamus quisquam, provident ratione officia aspernatur dicta cupiditate iure, voluptas ullam suscipit hic delectus cumque asperiores! Ducimus, eum consequatur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, aliquid earum unde dolores amet omnis nesciunt ducimus labore quas. Ipsam provident debitis corporis vel molestias minus quos error nostrum quaerat, nesciunt libero repellendus voluptates. Minus autem alias dolore modi officiis odio. Temporibus doloribus, assumenda, maiores ipsum sequi accusantium quo facilis eum sapiente atque minima rem, quia illo sint tenetur voluptates blanditiis placeat eligendi. Quas, distinctio quia molestiae aperiam excepturi velit ullam minus officia similique, consectetur soluta earum. Excepturi, possimus. Distinctio sapiente eius repellat dolores atque! Earum sit consequuntur nobis facilis, impedit ratione corrupti obcaecati veritatis magni rem ea blanditiis, non aperiam quidem? Beatae, impedit voluptate eveniet nam ex placeat sint vero perspiciatis nostrum fugit architecto consequuntur corrupti voluptatem dolorum debitis voluptates temporibus! Ipsa magni saepe nihil perferendis! Ad aspernatur cumque non perferendis dicta rem cum iure eveniet unde omnis. Quae autem aspernatur soluta officiis libero porro earum dolores eligendi, dolor alias sed numquam reprehenderit possimus! Obcaecati eveniet vel officia, numquam, odio amet minus laborum fugiat esse eaque explicabo provident id fugit libero? Optio neque dolorum voluptate ea ipsam, suscipit qui soluta, corporis ipsa quod maiores animi dolores eveniet dolore est doloribus praesentium necessitatibus quae at, impedit illum nam esse! Cumque, commodi vel quae velit sed dicta ea animi ad. Nesciunt perferendis sed earum sapiente incidunt, soluta, delectus nemo ratione ad expedita voluptate tempore tempora pariatur. Ipsum eius nostrum, autem est sunt praesentium blanditiis voluptates quas optio deserunt eum omnis adipisci. Corporis tempore, tempora beatae rem obcaecati fuga, accusantium est autem expedita veniam inventore eaque voluptate eveniet. Ratione necessitatibus est eum? Alias, laboriosam eos. Consequatur, animi eligendi? Aliquid temporibus modi praesentium minus suscipit? Sunt eaque iure corporis quidem delectus error ullam nobis soluta explicabo, ratione, ut cupiditate cum expedita quaerat molestias alias laboriosam. Veritatis a aliquid quos ea natus suscipit, sequi recusandae necessitatibus nobis sint officiis cumque, quidem, quod qui omnis. Quibusdam eos neque deleniti dolorem itaque, cum temporibus quod nam earum dolores expedita consectetur voluptatem rem vel vitae nulla fugiat suscipit, reiciendis fugit rerum ipsa a vero sunt. Deserunt optio, accusantium aperiam provident eaque culpa deleniti excepturi rem sit minus sed, dolorem harum praesentium! Voluptatibus velit explicabo sit! Consequatur, neque amet voluptatibus rem nesciunt quod harum fuga ipsum aperiam consequuntur accusamus ex recusandae a. Placeat quo id facilis voluptatibus, adipisci, eligendi amet odit excepturi consectetur reprehenderit saepe aliquam at quasi totam quos quam vero eum ullam deleniti nihil quibusdam, magni odio nostrum ratione. Deleniti officia adipisci accusantium. Itaque quae excepturi pariatur a earum sit quos sapiente velit quis fuga, corporis praesentium assumenda architecto saepe expedita. Tempore ut, officiis veniam quo labore cum quas facere tempora nostrum minima aperiam unde ad cumque quidem? Mollitia, doloribus eius. Cumque laboriosam provident nisi in id autem repudiandae, excepturi fugit iste nam, ipsa accusantium fuga odit placeat voluptates assumenda adipisci ab! Doloribus placeat dicta similique fuga maxime labore laborum atque maiores quaerat nesciunt saepe delectus, iste nihil quisquam inventore facere mollitia veritatis hic fugit sapiente. Sapiente ullam quasi eos dolores nostrum qui dolorem quaerat. Sequi magni veniam nesciunt commodi illo pariatur maiores corrupti distinctio adipisci sunt doloribus at laboriosam quisquam incidunt consequatur exercitationem, a numquam? Aspernatur, aliquam mollitia itaque dolorum molestiae harum a deserunt enim reiciendis quod optio, omnis provident quisquam officia labore. Ab exercitationem iusto accusamus! Aliquid odit autem doloremque! Fugit doloribus vitae rerum officiis sed nam aliquid error, voluptatum iste, temporibus placeat explicabo? Molestiae, debitis et? Dicta iste iusto facilis incidunt quaerat nesciunt labore rerum consequuntur numquam ipsa veritatis, culpa repellat, vero ratione doloremque expedita cum magnam voluptate similique quia? Dolorum laudantium accusamus, alias totam omnis reiciendis nam, ipsum dolorem necessitatibus doloribus molestias officiis odio hic exercitationem deleniti facere eius? Tenetur sint, modi quis et corrupti voluptates itaque maiores cupiditate explicabo eveniet dolore est veniam consectetur blanditiis culpa nobis vitae dolores id nam ab quae voluptate aspernatur. Nesciunt, dignissimos. In autem ea molestiae, ducimus natus repudiandae explicabo obcaecati sapiente quos dolores nesciunt nisi facere repellendus earum, ex optio sed consequuntur hic voluptas cumque voluptates nihil, laudantium vel et! Consectetur omnis odit dolorem ea sunt aperiam quos repellendus, nihil porro, illum magni quam voluptate vero eos mollitia quaerat blanditiis harum ut eaque ratione veritatis tempora dolorum? At nulla excepturi, distinctio tenetur enim laborum magnam quo deserunt alias ullam ad vel minima aliquid possimus porro quasi labore unde repudiandae sunt repellat nihil assumenda non voluptas eveniet. Enim dignissimos cupiditate ut itaque non perferendis, inventore quaerat accusantium dolore aspernatur esse, quibusdam rem obcaecati sequi ipsa saepe, numquam laudantium? Provident magni exercitationem pariatur reprehenderit ab suscipit ullam quasi vero vitae officia consectetur porro nobis, aperiam minima voluptates eos ea quia, laborum fuga nesciunt ratione hic minus laudantium! Temporibus molestias ullam dolor nesciunt veniam deleniti, voluptate corporis aspernatur tenetur? Eveniet dolores excepturi aliquid, similique ad consequuntur laudantium totam a nobis perferendis. Id dolores temporibus hic ab velit ullam dolorem architecto, possimus, repellendus iste iusto libero facilis, ea sapiente earum quibusdam repellat quae maxime sit nisi illum sunt? Ea iste ad enim unde harum eaque aut tempore excepturi, saepe maxime nisi ratione sequi repellat qui earum dolore ipsum quod totam aliquid in, aspernatur sapiente! Est, dolore a. Voluptates fuga iste possimus illum quaerat, exercitationem rerum? Molestiae provident quisquam iusto rerum accusamus, natus nihil est error deleniti quo magnam veritatis cum dignissimos sapiente. Debitis sint quaerat ut? Reiciendis corporis doloribus perferendis nam amet aliquam! Ea ab at voluptatem reiciendis maiores vero ducimus? Porro possimus ipsam repellat, laborum dignissimos, maiores ex cupiditate, eos fugiat consectetur autem. Saepe quidem non architecto qui iure incidunt veniam repudiandae, sint excepturi dolorum rerum hic eos cumque cum consequuntur, voluptate dicta. Sunt quis magnam dolores aspernatur laboriosam quae nam ratione provident fuga natus earum, saepe vel deleniti dolorem aliquid explicabo nobis ad voluptate itaque optio ea illo. Illum cumque eos rem repellat cum. Assumenda possimus itaque ut similique aut asperiores ab corrupti minima optio, iste, quos dolor saepe quod? Voluptates ex, mollitia ea facilis rem saepe beatae accusamus quisquam, provident ratione officia aspernatur dicta cupiditate iure, voluptas ullam suscipit hic delectus cumque asperiores! Ducimus, eum consequatur.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, aliquid earum unde dolores amet omnis nesciunt ducimus labore quas. Ipsam provident debitis corporis vel molestias minus quos error nostrum quaerat, nesciunt libero repellendus voluptates. Minus autem alias dolore modi officiis odio. Temporibus doloribus, assumenda, maiores ipsum sequi accusantium quo facilis eum sapiente atque minima rem, quia illo sint tenetur voluptates blanditiis placeat eligendi. Quas, distinctio quia molestiae aperiam excepturi velit ullam minus officia similique, consectetur soluta earum. Excepturi, possimus. Distinctio sapiente eius repellat dolores atque! Earum sit consequuntur nobis facilis, impedit ratione corrupti obcaecati veritatis magni rem ea blanditiis, non aperiam quidem? Beatae, impedit voluptate eveniet nam ex placeat sint vero perspiciatis nostrum fugit architecto consequuntur corrupti voluptatem dolorum debitis voluptates temporibus! Ipsa magni saepe nihil perferendis! Ad aspernatur cumque non perferendis dicta rem cum iure eveniet unde omnis. Quae autem aspernatur soluta officiis libero porro earum dolores eligendi, dolor alias sed numquam reprehenderit possimus! Obcaecati eveniet vel officia, numquam, odio amet minus laborum fugiat esse eaque explicabo provident id fugit libero? Optio neque dolorum voluptate ea ipsam, suscipit qui soluta, corporis ipsa quod maiores animi dolores eveniet dolore est doloribus praesentium necessitatibus quae at, impedit illum nam esse! Cumque, commodi vel quae velit sed dicta ea animi ad. Nesciunt perferendis sed earum sapiente incidunt, soluta, delectus nemo ratione ad expedita voluptate tempore tempora pariatur. Ipsum eius nostrum, autem est sunt praesentium blanditiis voluptates quas optio deserunt eum omnis adipisci. Corporis tempore, tempora beatae rem obcaecati fuga, accusantium est autem expedita veniam inventore eaque voluptate eveniet. Ratione necessitatibus est eum? Alias, laboriosam eos. Consequatur, animi eligendi? Aliquid temporibus modi praesentium minus suscipit? Sunt eaque iure corporis quidem delectus error ullam nobis soluta explicabo, ratione, ut cupiditate cum expedita quaerat molestias alias laboriosam. Veritatis a aliquid quos ea natus suscipit, sequi recusandae necessitatibus nobis sint officiis cumque, quidem, quod qui omnis. Quibusdam eos neque deleniti dolorem itaque, cum temporibus quod nam earum dolores expedita consectetur voluptatem rem vel vitae nulla fugiat suscipit, reiciendis fugit rerum ipsa a vero sunt. Deserunt optio, accusantium aperiam provident eaque culpa deleniti excepturi rem sit minus sed, dolorem harum praesentium! Voluptatibus velit explicabo sit! Consequatur, neque amet voluptatibus rem nesciunt quod harum fuga ipsum aperiam consequuntur accusamus ex recusandae a. Placeat quo id facilis voluptatibus, adipisci, eligendi amet odit excepturi consectetur reprehenderit saepe aliquam at quasi totam quos quam vero eum ullam deleniti nihil quibusdam, magni odio nostrum ratione. Deleniti officia adipisci accusantium. Itaque quae excepturi pariatur a earum sit quos sapiente velit quis fuga, corporis praesentium assumenda architecto saepe expedita. Tempore ut, officiis veniam quo labore cum quas facere tempora nostrum minima aperiam unde ad cumque quidem? Mollitia, doloribus eius. Cumque laboriosam provident nisi in id autem repudiandae, excepturi fugit iste nam, ipsa accusantium fuga odit placeat voluptates assumenda adipisci ab! Doloribus placeat dicta similique fuga maxime labore laborum atque maiores quaerat nesciunt saepe delectus, iste nihil quisquam inventore facere mollitia veritatis hic fugit sapiente. Sapiente ullam quasi eos dolores nostrum qui dolorem quaerat. Sequi magni veniam nesciunt commodi illo pariatur maiores corrupti distinctio adipisci sunt doloribus at laboriosam quisquam incidunt consequatur exercitationem, a numquam? Aspernatur, aliquam mollitia itaque dolorum molestiae harum a deserunt enim reiciendis quod optio, omnis provident quisquam officia labore. Ab exercitationem iusto accusamus! Aliquid odit autem doloremque! Fugit doloribus vitae rerum officiis sed nam aliquid error, voluptatum iste, temporibus placeat explicabo? Molestiae, debitis et? Dicta iste iusto facilis incidunt quaerat nesciunt labore rerum consequuntur numquam ipsa veritatis, culpa repellat, vero ratione doloremque expedita cum magnam voluptate similique quia? Dolorum laudantium accusamus, alias totam omnis reiciendis nam, ipsum dolorem necessitatibus doloribus molestias officiis odio hic exercitationem deleniti facere eius? Tenetur sint, modi quis et corrupti voluptates itaque maiores cupiditate explicabo eveniet dolore est veniam consectetur blanditiis culpa nobis vitae dolores id nam ab quae voluptate aspernatur. Nesciunt, dignissimos. In autem ea molestiae, ducimus natus repudiandae explicabo obcaecati sapiente quos dolores nesciunt nisi facere repellendus earum, ex optio sed consequuntur hic voluptas cumque voluptates nihil, laudantium vel et! Consectetur omnis odit dolorem ea sunt aperiam quos repellendus, nihil porro, illum magni quam voluptate vero eos mollitia quaerat blanditiis harum ut eaque ratione veritatis tempora dolorum? At nulla excepturi, distinctio tenetur enim laborum magnam quo deserunt alias ullam ad vel minima aliquid possimus porro quasi labore unde repudiandae sunt repellat nihil assumenda non voluptas eveniet. Enim dignissimos cupiditate ut itaque non perferendis, inventore quaerat accusantium dolore aspernatur esse, quibusdam rem obcaecati sequi ipsa saepe, numquam laudantium? Provident magni exercitationem pariatur reprehenderit ab suscipit ullam quasi vero vitae officia consectetur porro nobis, aperiam minima voluptates eos ea quia, laborum fuga nesciunt ratione hic minus laudantium! Temporibus molestias ullam dolor nesciunt veniam deleniti, voluptate corporis aspernatur tenetur? Eveniet dolores excepturi aliquid, similique ad consequuntur laudantium totam a nobis perferendis. Id dolores temporibus hic ab velit ullam dolorem architecto, possimus, repellendus iste iusto libero facilis, ea sapiente earum quibusdam repellat quae maxime sit nisi illum sunt? Ea iste ad enim unde harum eaque aut tempore excepturi, saepe maxime nisi ratione sequi repellat qui earum dolore ipsum quod totam aliquid in, aspernatur sapiente! Est, dolore a. Voluptates fuga iste possimus illum quaerat, exercitationem rerum? Molestiae provident quisquam iusto rerum accusamus, natus nihil est error deleniti quo magnam veritatis cum dignissimos sapiente. Debitis sint quaerat ut? Reiciendis corporis doloribus perferendis nam amet aliquam! Ea ab at voluptatem reiciendis maiores vero ducimus? Porro possimus ipsam repellat, laborum dignissimos, maiores ex cupiditate, eos fugiat consectetur autem. Saepe quidem non architecto qui iure incidunt veniam repudiandae, sint excepturi dolorum rerum hic eos cumque cum consequuntur, voluptate dicta. Sunt quis magnam dolores aspernatur laboriosam quae nam ratione provident fuga natus earum, saepe vel deleniti dolorem aliquid explicabo nobis ad voluptate itaque optio ea illo. Illum cumque eos rem repellat cum. Assumenda possimus itaque ut similique aut asperiores ab corrupti minima optio, iste, quos dolor saepe quod? Voluptates ex, mollitia ea facilis rem saepe beatae accusamus quisquam, provident ratione officia aspernatur dicta cupiditate iure, voluptas ullam suscipit hic delectus cumque asperiores! Ducimus, eum consequatur.
        </div>
      </div>
    </div>
  )
}