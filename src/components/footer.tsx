import {useCsrfToken} from "@/components/use-csrf";

export default function Footer() {
    const {csrfToken} = useCsrfToken();

    console.log('HERE IS TOKEN', csrfToken);

    // eslint-disable-next-line react/no-unescaped-entities
    return <p>I'm a footer with token: {csrfToken}</p>
}