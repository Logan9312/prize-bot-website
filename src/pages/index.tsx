import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { SignIn, UserButton } from "@clerk/nextjs";
import Layout from "~/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>Test</div>
    </Layout>
  );
}
