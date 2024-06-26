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
import { PlusIcon, XIcon } from "lucide-react";
import { languages, speaks, general, technical, Skill } from "./constants";
import { Badge } from "@/components/ui/badge";

type SelectedSkills = {
  [key: string]: Skill[];
};

type ComboBoxProps = {
  selectedSkills: SelectedSkills;
  setSelectedSkills: React.Dispatch<React.SetStateAction<SelectedSkills>>;
};

function ComboBoxResponsive({
  selectedSkills,
  setSelectedSkills,
}: ComboBoxProps) {
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
                className="flex justify-between"
              >
                {skill.label}
                {selectedSkills.languages?.includes(skill) && (
                  <Button variant="destructive" size="sm">
                    <XIcon size={15} />
                  </Button>
                )}
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
      <DrawerContent className="px-5">
        <div className="mt-4 border-t">
          <StatusList />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const SkillComponent = () => {
  const [selectedSkills, setSelectedSkills] = useState<SelectedSkills>({
    languages: [{ label: "Python", value: "python" }],
    technical: [
      { value: "numpy", label: "NumPy" },
      { value: "pandas", label: "Pandas" },
      { value: "matplotlib", label: "Matplotlib" },
      { value: "scikit-learn", label: "scikit-learn" },
      { value: "mysql", label: "MySQL" },
    ],
    general: [{ value: "communication", label: "Communication" }],
    speaks: [{ label: "English", value: "english" }],
  });

  const DisplaySkills = () => {
    const handleRemoveSkill = (key: string, skill: Skill) => {
      setSelectedSkills((prevState: SelectedSkills) => {
        const keyArray = prevState[key] || [];
        const index = keyArray.findIndex(
          (obj: Skill) => obj.value === skill.value,
        );
        return {
          ...prevState,
          [key]: [...keyArray.slice(0, index), ...keyArray.slice(index + 1)],
        };
      });
    };

    return (
      <div>
        {Object.keys(selectedSkills).map((key) => (
          <div key={key}>
            {selectedSkills[key].length != 0 && (
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
            )}
            <div className="flex gap-3">
              {selectedSkills[key].map((skill) => (
                <Badge key={skill.value} className="relative">
                  {skill.label}
                  <Button
                    size="icon"
                    className="absolute -top-1 -right-2 bg-destructive rounded-full w-4 h-4"
                    onClick={() => handleRemoveSkill(key, skill)}
                  >
                    <XIcon color="white" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <ComboBoxResponsive
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
      <DisplaySkills />
    </div>
  );
};

export default SkillComponent;
