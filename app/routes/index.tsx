import { Index } from "~/index";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "BeatSaber Lyrics Finder and API" },
        { name: "BeatSaber Plugin Lyrics Finder and API", content: "Lyrics here pls" }
    ];
}

export default function Home(){
    return (
        <Index />
    );
}