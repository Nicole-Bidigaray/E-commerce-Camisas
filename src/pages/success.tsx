import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "line_items.data.price.product"],
    });

    if (!session.line_items || !session.line_items.data.length) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const lineItem = session.line_items.data[0];

    if (!lineItem.price || !lineItem.price.product) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const customerName = session.customer_details?.name || "Cliente";
    const product = lineItem.price.product as Stripe.Product;

    return {
      props: {
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        },
      },
    };
  } catch (error) {
    console.error("Error retrieving session:", error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};
