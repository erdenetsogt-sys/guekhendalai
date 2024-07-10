import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Members = () => {
  return (
    <div className="flex flex-col md:flex justify-around gap-5 px-10 py-5">
      <div className="text-xl md:text-3xl">Member</div>
      <div className="flex-col md:flex-row flex gap-10 justify-around">
        <Card className="border-2 border-gray-400 py-4 w-[70vw] md:w-[25vw]">
          <CardContent className="flex gap-2 items-center">
            <Avatar className="lg:size-14 size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>Anynomous</p>
              <p>Unknown</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>I dont give a fuck</p>
          </CardFooter>
        </Card>

        <Card className="border-2 border-gray-400  py-4 w-[70vw] md:w-[30vw]">
          <CardContent className="flex gap-2 items-center">
            <Avatar className="lg:size-14 size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>Munkhbat</p>
              <p>CEO</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Ulaanbaatar Mandtugai</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Members;
