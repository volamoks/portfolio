import { Underscore } from '@/components';
import { icons1, icons2, icons3 } from '@/constants';

interface Icon {
    name: string;
    component: React.ReactNode;
}

export const IconCard = ({ name, component }: Icon) => {
    return (
        <div className="flex flex-col items-center  ">
            <div className="card-icon">{component}</div>
            <div className="card-name text-center py-1">{name}</div>
        </div>
    );
};

const fullCard = (text: string, arr: Icon[]) => (
    <>
        <p className="text-4xl  uppercase font-bold mt-12 text-center mb-4 w-full">
            {text}
            <Underscore />
        </p>
        <div className=" w-full flex-wrap grid grid-cols-3 xl:flex gap-2 justify-start   items-center p-2">
            {arr.map(icon => (
                <IconCard
                    key={icon.name}
                    name={icon.name}
                    component={icon.component}
                />
            ))}
        </div>
    </>
);

export const Stack = () => {
    return (
        <div className="min-h-screen max-w-screen flex flex-col justify-around py-6">
            {fullCard('My stack', icons1(50))}
            {fullCard('Love to use', icons2(50))}
            {fullCard('On the way to know better', icons3(50))}
        </div>
    );
};
