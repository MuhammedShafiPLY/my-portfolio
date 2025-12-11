import {motion, AnimatePresence } from 'framer-motion';
import React, { useMemo } from 'react'

const IntroAnimation = ({onfinish}) => {

  const greeting = useMemo(() => [
    "Hello","ഹലോ", "नमस्ते", "Hola", "Bonjour",
      "Merhaba", "Hej", "Hallo", "Salam "

  ])

  const [index, setIndex ] = React.useState(0);
  const [visible, setVisible ] = React.useState(true);

  React.useEffect(() => {
    if(index <greeting.length -1){
      const id = setInterval(() =>  setIndex((i) => i + 1 ), 180);
      return () => clearInterval(id);
    }
    else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [index, greeting.length])

  return (
    <AnimatePresence onExitComplete={onfinish}>

      {
        visible && (
          <motion.div 
          className= "fixed inset-0 z-9999 flex items-center justify-center bg-black text-white text-6xl font-bold overflow-hidden"
          initial = {{y:0}}
          exit = {{y:"-100%",
            transition: {
              duration : 1.05,
              ease : [0.22, 1, 0.36, 1 ],
            },
          }}
          >
            <motion.h1
            key={index}
            className= "text=4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold "
            initial = {{opacity:0, y: 20}}
            animate = {{opacity:1, y:0}}
            exit = {{opacity:0, y:-20}}
            transition = {{ duration:0.12 }}
            
            >
              {greeting[index]}
            </motion.h1>
          </motion.div>
        )
      }

    </AnimatePresence>
  )
}

export default IntroAnimation