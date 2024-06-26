"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useState, useEffect } from "react";
import { XIcon } from "lucide-react";
import { languages, speaks, general, technical, Skill } from "./constants";
import { Badge } from "@/components/ui/badge";

type SelectedSkills = {
  [key: string]: Skill[];
};

type SkillSearchProps = {
  selectedSkills: SelectedSkills;
  setSelectedSkills: React.Dispatch<React.SetStateAction<SelectedSkills>>;
};

function SkillSearch({ selectedSkills, setSelectedSkills }: SkillSearchProps) {
  const [showList, setShowList] = useState(false);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    inputVal.length > 0 ? setShowList(true) : setShowList(false);
  }, [inputVal]);
  console.log(inputVal);

  const handleAddSkill = (key: string, skill: Skill) => {
    setSelectedSkills((prevState: SelectedSkills) => {
      setInputVal("");
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
      <CommandInput
        placeholder="What skills do you have?"
        value={inputVal}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputVal(e?.target?.value)
        }
      />
      <CommandList>
        {showList && (
          <>
            <CommandEmpty>No skills found.</CommandEmpty>
            <CommandGroup heading="Programming languages">
              {languages.map((skill) => (
                <CommandItem
                  key={skill.value}
                  value={skill.value}
                  onSelect={() => handleAddSkill("languages", skill)}
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
            <CommandSeparator />
            <CommandGroup heading="Technical skills">
              {technical.map((skill) => (
                <CommandItem
                  key={skill.value}
                  value={skill.value}
                  onSelect={() => handleAddSkill("technical", skill)}
                >
                  {skill.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Soft skills">
              {general.map((skill) => (
                <CommandItem
                  key={skill.value}
                  value={skill.value}
                  onSelect={() => handleAddSkill("general", skill)}
                >
                  {skill.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Spoken languages">
              {speaks.map((skill) => (
                <CommandItem
                  key={skill.value}
                  value={skill.value}
                  onSelect={() => handleAddSkill("speaks", skill)}
                >
                  {skill.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
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
      <SkillSearch
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />
      <DisplaySkills />
    </div>
  );
};

export default SkillComponent;
