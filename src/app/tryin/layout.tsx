import { ReactNode } from "react";
import Tryin from "./page";

const BaseLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
    
     <div>
      <Tryin />
      {children}
     </div>
    </>
  );
};

export default BaseLayout;
