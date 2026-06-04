"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputSearch() {
  const router = useRouter();

  const [value, setValue] = useState("");

  function handleSearch() {
    router.push(`/dummy-json?q=${value}`);
  }
  return (
    <InputGroup>
      <InputGroupAddon>
        <Search className="h-4 w-4" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Search products..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputGroup>
  );
}
