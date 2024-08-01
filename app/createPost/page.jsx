
const page = () => {
  return (
    <form action="" className="flex flex-col gap-4">
        
        <input type="text" placeholder="Title" className=" border border-slate-500 px-8 py-2" />
        <textarea name="description" id="" placeholder="Description" className="border border-slate-500 px-8 py-2"></textarea>
        <button className="w-fit bg-green-500 font-bold px-8 py-2">Create Post</button>
    </form>
  )
}

export default page