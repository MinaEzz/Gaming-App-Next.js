import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="w-fit flex items-center gap-1 lg:text-3xl max-lg:text-xl font-semibold uppercase text-gray-50"
    >
      <h1 className="text-rose-500">Gaming</h1>
      <span>Boi</span>
    </Link>
  );
};

export default Logo;
