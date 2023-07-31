import { IProduct } from "@/pages";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  price: number;
  status: string;
  rating: number;
}

const ProductCard = ({
  averageRating,
  category,
  price,
  image,
  name,
  status,
  id,
}: IProduct) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
      <Link href={`products/${id}`}>
        <div className="mb-4">
          <Image
            width={100}
            height={100}
            src={image}
            alt={name}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{category}</p>
        <p className="text-lg font-bold text-green-600 mb-2">${price}</p>
        <p
          className={status === "In Stock" ? "text-green-600" : "text-red-600"}
        >
          {status}
        </p>
        <div className="flex items-center">
          <span className="text-yellow-500 flex">
            {Array.from({ length: averageRating }, (_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.38 6.475h6.569L12.5 10l2.449 3.525H12.38L10 20l-2.38-6.475H1.05L3.5 10 1.051 6.475H7.62z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </span>
          <span className="ml-1 text-gray-600">{averageRating} Stars</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
