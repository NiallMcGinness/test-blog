

import Blog from '../components/blog.mdx'

export default function TestBlog() {

  return (


    <div className="sm:my-5 md:my-20 sm:mx-2 md:mx-40  lg:mx-64 xl:mx-64 overflow-hidden shadow rounded-lg bg-opacity-100">
      <div className="bg-white px-4 py-5 sm:p-6">
        <div name="introlist" className="flex-row prose lg:prose-xl">
          <div className="my-3">

            <Blog />


          </div>

        </div>
      </div >
    </div>


  )

}