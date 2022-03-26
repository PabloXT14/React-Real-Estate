import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  )
}
