import { List } from "phosphor-react";

export function Header() {
  return (
    <header className="w-full bg-[#27272A] h-20 flex items-center">
      <div className="w-full max-w-[1148px] mx-auto flex justify-between items-center px-6">
        <button className="w-40 h-10 bg-[#3F3F46] rounded-lg hidden md:inline-flex
          hover:bg-brand-300 focus:bg-brand-300 transition-all ease-in-out duration-500" />
        <button className="w-8 h-8 rounded-lg md:hidden text-[#3F3F46] 
          hover:text-brand-300 focus:text-brand-300 transition-all ease-in-out duration-500">
          <List width={32} height={32} />
        </button>

        <div className="justify-between max-w-[468px] w-full hidden md:flex">
          <button className="w-24 h-4 bg-[#3F3F46] rounded-full hover:bg-brand-300 
            transition-all ease-in-out duration-500 focus:bg-brand-300" />
          <button className="w-24 h-4 bg-[#3F3F46] rounded-full hover:bg-brand-300 
            transition-all ease-in-out duration-500 focus:bg-brand-300" />
          <button className="w-24 h-4 bg-[#3F3F46] rounded-full hover:bg-brand-300 
            transition-all ease-in-out duration-500 focus:bg-brand-300" />
          <button className="w-24 h-4 bg-[#3F3F46] rounded-full hover:bg-brand-300 
            transition-all ease-in-out duration-500 focus:bg-brand-300" />
        </div>

        <div className="flex w-full max-w-[144px] justify-between items-center">
          <button className="w-8 h-8 bg-[#3F3F46] rounded-lg hover:bg-brand-300 
            focus:bg-brand-300 transition-all ease-in-out duration-500" />
          <button className="w-8 h-8 bg-[#3F3F46] rounded-lg hover:bg-brand-300 
            focus:bg-brand-300 transition-all ease-in-out duration-500" />
          <button className="w-12 h-12 bg-[#3F3F46] rounded-full hover:bg-brand-300 
            focus:bg-brand-300 transition-all ease-in-out duration-500" />
        </div>
      </div>
    </header>
  );
}