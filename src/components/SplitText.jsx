import { useEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'

function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
}) {
  const ref = useRef(null)

  const letters = useMemo(() => {
    return Array.from(text)
  }, [text])

  useEffect(() => {
    if (!ref.current) return

    const chars = ref.current.querySelectorAll('.split-char')
    if (!chars.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            onLetterAnimationComplete?.()
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, duration, ease, from, to, onLetterAnimationComplete, text])

  const Tag = tag

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{ textAlign }}
      aria-label={text}
    >
      {letters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`split-char${char === ' ' ? ' split-space' : ''}`}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}

export default SplitText
