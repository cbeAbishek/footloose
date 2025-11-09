"use client"

import { motion } from "framer-motion"

interface ArticleContentProps {
  content: string
}

export function ArticleContent({ content }: ArticleContentProps) {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="mb-6 mt-12 text-4xl font-black text-black dark:text-white">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="mb-4 mt-10 text-3xl font-black text-black dark:text-white">{line.slice(3)}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="mb-3 mt-8 text-2xl font-bold text-black dark:text-white">{line.slice(4)}</h3>
        }
        // Blockquotes
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} className="my-6 border-l-4 border-black pl-6 italic text-gray-700 dark:border-white dark:text-gray-300">
              {line.slice(2)}
            </blockquote>
          )
        }
        // List items
        if (line.startsWith('- ')) {
          return <li key={index} className="mb-2 ml-6 list-disc text-gray-700 dark:text-gray-300">{line.slice(2)}</li>
        }
        if (/^\d+\. /.test(line)) {
          return <li key={index} className="mb-2 ml-6 list-decimal text-gray-700 dark:text-gray-300">{line.replace(/^\d+\. /, '')}</li>
        }
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />
        }
        // Regular paragraphs
        return <p key={index} className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">{line}</p>
      })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mx-auto max-w-none"
    >
      <div className="space-y-4">
        {parseMarkdown(content)}
      </div>
    </motion.article>
  )
}
