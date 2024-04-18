import BlogSlider from "@/app/components/molecules/blog_slider";

export default function Blog({ apiData = {} }) {
  return (
    <div className="xlg:mt-[140px] mt-[60px] w-full flex flex-col justify-center items-center">
      <h2 className="lg:text-[48px] text-[40px] leading-[120%] text-center font-SpaceGrotesk xlg:pb-[60px] sm:pb-10 pb-8 capitalize">
        {apiData?.title}
      </h2>
      <div className="w-full xlg:pl-[60px] sm:pl-8 pl-4 pb-1 !bg-transparent bg-purple">
        <BlogSlider />
      </div>
    </div>
  );
}
