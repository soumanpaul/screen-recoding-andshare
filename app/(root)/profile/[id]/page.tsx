import Header from "@/components/Header";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="souman@gmail.com"
        title="Souman"
        userImg="/assets/images/dummy.jpg"
      />
      <div className="text-2xl font-karla">User Id: {id}</div>;
    </div>
  );
};

export default Page;
