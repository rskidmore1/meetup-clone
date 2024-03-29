import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'

async function retrieveGroups() {
  const response = await fetch('http://35.86.78.63:8000/group/retrieve-groups');
  return response; // Note: Can I make this response.json()?
}

export default function MyGroups() {
  const [groups, setGroups] = useState();

  useEffect(() => {
    retrieveGroups().then(
      result => result.json()).then(
        data => {
          setGroups(data.groups);
        }
      );
  }, []);

  return (
    <div className="flex flex-col px-10 py-5 border-b-[1px] border-b-gray-500 ">
      <h1 className="font-bold text-2xl self-center">My Groups</h1>
      <div className="flex flex-row justify-center gap-5 pt-5">
        {groups?.map((group, index) => (
          <div className="flex flex-row bg-white gap-5 p-3 rounded-lg w-fit h-fit" key={index}>
            <Link href={"/group/" + `${group.id}`}>
              <Image
                src={group.picture}
                alt="group photo"
                width={150}
                height={150}
              />
              <div className="flex flex-col">
                <span>
                  {group.name}
                </span>
                <span>
                  {group.location}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
