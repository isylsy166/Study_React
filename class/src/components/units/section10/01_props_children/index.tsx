interface IProps {
   children: JSX.Element;
}

export default function Layout(props: IProps) {
   return (
      <div>
         <div>안녕하세요</div>
         <div>{props.children}</div>
         <div></div>
         <div>소연입니다</div>
      </div>
   );
}
