import React, { useEffect, useState } from "react";

import { Container, Roll, SafeAreaContent } from "./styles";

import { Cards } from "@/components/Cards";

import { api } from "@/services/api";
import { ComicDTO } from "@/dTOS/comic";

export function Comics() {
  const [data, SetData] = useState<ComicDTO[]>([]);
  useEffect(() => {
    api.get("/comics").then((response) => {
      SetData(response.data.data.results);
      console.log(response.data.data.results);
    });
  }, []);
  return (
    <SafeAreaContent>
      <Container>
        <Roll
          data={data}
          keyExtractor={(data: ComicDTO) => data.id}
          renderItem={(item: { item: ComicDTO }) => <Cards data={item.item} />}
        />
      </Container>
    </SafeAreaContent>
  );
}
