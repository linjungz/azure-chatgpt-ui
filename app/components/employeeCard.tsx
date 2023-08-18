import React from "react";
import styles from "./employeeCard.module.scss";
import Link from "next/link";

export default function EmployeeCard(props: {
  employeeName: string;
  employeeRole: string;
  employeeImageSrc: string;
  href: string;
}) {
  return (
    <Link className={styles["link"]} href={props.href}>
      <li className={styles["employeeCard"]}>
        <div>
          <p className={styles["employeeName"]}>{props.employeeName}</p>
          <p>{props.employeeRole}</p>
        </div>
        <img
          src={props.employeeImageSrc}
          alt={`bilde av ${props.employeeName}`}
        />
      </li>
    </Link>
  );
}
