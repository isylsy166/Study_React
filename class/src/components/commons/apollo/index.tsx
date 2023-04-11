import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

interface IApolloSetting {
   children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSetting) {
   const client = new ApolloClient({
      uri: "http://backend-practice.codebootcamp.co.kr/graphql",
      cache: new InMemoryCache(), // 나중에 하기
   });

   // prettier-ignore
   return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
    );
}
