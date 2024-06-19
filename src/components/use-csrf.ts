import {useContext} from "react";
import {CsrfTokenContext} from "@/components/csrf-context";

export const useCsrfToken = () => useContext(CsrfTokenContext);
