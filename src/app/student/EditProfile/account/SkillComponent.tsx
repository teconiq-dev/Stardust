"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { languages, speaks, general, technical, Skill } from "./constants";
import { Badge } from "@/components/ui/badge";

type SelectedSkills = {
  [key: string]: Skill[];
};

function ComboBoxResponsive({
  setSelectedSkills,
}: {
  setSelectedSkills: React.Dispatch<React.SetStateAction<SelectedSkills>>;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function StatusList() {
    const handleAddValue = (key: string, skill: Skill) => {
      setSelectedSkills((prevState: SelectedSkills) => {
        const keyArray = prevState[key] || [];
        const index = keyArray.findIndex(
          (obj: Skill) => obj.value === skill.value,
        );
        if (index === -1) {
          // Object doesn't exist, add it
          return {
            ...prevState,
            [key]: [...keyArray, skill],
          };
        } else {
          // Object exists, remove it
          return {
            ...prevState,
            [key]: [...keyArray.slice(0, index), ...keyArray.slice(index + 1)],
          };
        }
      });
    };

    return (
      <Command>
        <CommandInput placeholder="Filter status..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Programming languages">
            {languages.map((skill) => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={() => handleAddValue("languages", skill)}
              >
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Technical skills">
            {technical.map((skill) => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={() => handleAddValue("technical", skill)}
              >
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Soft skills">
            {general.map((skill) => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={() => handleAddValue("general", skill)}
              >
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Spoken languages">
            {speaks.map((skill) => (
              <CommandItem
                key={skill.value}
                value={skill.value}
                onSelect={() => handleAddValue("speaks", skill)}
              >
                {skill.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary">
            <PlusIcon className="mr-2" size={16} />
            Add skills
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">
          <PlusIcon className="mr-2" size={16} />
          Add skills
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const SkillComponent = () => {
  const [selectedSkills, setSelectedSkills] = useState<SelectedSkills>({});
  console.log("selectedSkills", selectedSkills);

  const DisplaySkills = () => {
    return (
      <div>
        {Object.keys(selectedSkills).map((key) => (
          <div key={key}>
            <h3 className="text-lg font-semibold py-1 mt-5 mb-1">
              {key === "languages"
                ? "Programming languages"
                : key === "technical"
                  ? "Technical skills"
                  : key === "general"
                    ? "Soft skills"
                    : key === "speaks"
                      ? "Spoken languages"
                      : ""}
            </h3>
            <div className="flex gap-3">
              {selectedSkills[key].map((skill) => (
                <Badge key={skill.value}>{skill.label}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <ComboBoxResponsive setSelectedSkills={setSelectedSkills} />
      <DisplaySkills />
    </div>
  );
};

export default SkillComponent;
