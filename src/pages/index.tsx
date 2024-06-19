import React, {ReactElement, useEffect} from "react";
import Layout from "@/components/layout";
import {GetServerSideProps} from "next";
import {useCsrfToken} from "@/components/use-csrf";
import Form from "@/components/form";
import Footer from "@/components/footer";

type Props = {
    csrfToken: string;
};

export const getServerSideProps: GetServerSideProps = async ({res}) => {
    const csrfToken = res.getHeader('x-csrf-token') || 'missing';
    return {props: {csrfToken}};
};

export default function Page({csrfToken}: Props) {
    const {setCsrfToken} = useCsrfToken();

    useEffect(() => {
        setCsrfToken(csrfToken);
    }, [csrfToken, setCsrfToken]);

    return (<Form/>)
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout Component={Footer}>
            {page}
        </Layout>
    )
};