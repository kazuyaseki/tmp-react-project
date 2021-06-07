import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button: React.VFC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
