import {useCsrfToken} from "@/components/use-csrf";

function FormPage() {
    const {csrfToken} = useCsrfToken();

    if(!csrfToken) return <p>We fucked</p>;

    return (
        <form action="/api/form-handler" method="post">
            <input type="hidden" value={csrfToken}/>
            <input type="text" name="my-input"/>
            <input type="submit"/>
        </form>
    );
}

export default FormPage;