import Script from "next/script";

interface ICodepenProps {
  title: string;
  user: string;
  hash: string;
}

const Codepen: React.FunctionComponent<ICodepenProps> = ({
  hash,
  title,
  user,
}) => {
  return (
    <>
      <p
        className="codepen"
        data-height="500"
        data-default-tab="html,result"
        data-slug-hash={hash}
        data-user={user}
      >
        <span>
          See the Pen
          <a href={`https://codepen.io/${user}/pen/${hash}`}>{title}</a> by{" "}
          {user} (<a href={`https://codepen.io/${user}`}>@{user}</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <Script async src="https://cpwebassets.codepen.io/assets/embed/ei.js" />
    </>
  );
};

export default Codepen;
