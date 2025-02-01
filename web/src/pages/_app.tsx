import {useEffect} from "react";
import type {AppProps} from "next/app";
import {UsersModule} from "@/modules/users/UsersModule";
import {AxiosHttpService} from "@/modules/core/http/AxiosHttpService";
import {Dispatcher} from "@/modules/core/Dispatcher/Dispatcher";
import '../ui/global.css';

const apiBaseUrl = "https://api.example.com";
const httpService = new AxiosHttpService(apiBaseUrl);
const dispatcher = new Dispatcher();

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        inicializarApp();
    }, []);

    return <Component {...pageProps} />;
}

function inicializarApp() {
    registerModules();
}


function registerModules() {
    new UsersModule(httpService, dispatcher);
}

export const dispatcherInstance = dispatcher;

