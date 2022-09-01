import Header from "../components/Header";
import { Alert } from "flowbite-react/lib/cjs/components/Alert";
import useMessage from "../custom-hooks/useMessage";

export default function Home(){
    const { message, setMessage } = useMessage();
    return (
        <>
            <Header />
            { message && (
                <div className="w-full p-4">
                    <Alert color="success" 
                        onDismiss={function onDismiss(){ setMessage("") }}>
                        <span className="font-medium">
                            { message }
                        </span>
                    </Alert>
                </div>
            )}
        </>
    );
}