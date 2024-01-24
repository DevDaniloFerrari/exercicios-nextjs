import Pessoa from "@/components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Danilo" idade={23} />
            <Pessoa nome="Ester" />
        </div>
    )
}