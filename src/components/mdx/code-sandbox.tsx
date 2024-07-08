"use client";

interface ICodeSandboxProps {
  src: string;
  title: string;
  allow: string;
  sandbox: string;
}

const CodeSandbox: React.FunctionComponent<ICodeSandboxProps> = ({
  allow,
  sandbox,
  src,
  title,
}) => {
  return (
    <iframe
      src={src}
      style={{
        width: "100%",
        height: "500px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      title={title}
      allow={allow}
      sandbox={sandbox}
    ></iframe>
  );
};

export default CodeSandbox;
