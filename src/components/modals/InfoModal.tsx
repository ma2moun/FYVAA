import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-m text-gray-500 dark:text-gray-300"><i>
        It is getting harder...</i></p>
	  <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in <strong>5</strong> tries.</p>
	  <p className="text-sm text-gray-500 dark:text-gray-300">
		After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="U" />
        <Cell value="P" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter <strong>S</strong> is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="G" status="present" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter <strong>G</strong> is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="T" status="absent" />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter <strong>T</strong> is not in the word in any spot.
      </p>
	  <p className="text-sm text-gray-300 dark:text-gray-300"><strong>NOTE</strong>: Built by <i>(<a href="https://twitter.com/ientist"> Maamoun</a> </i>, <a href="mailto:contact@fyvaa.com?subject=Regarding Fyvaa">Email</a>) based on     
	   <a href="https://github.com/cwackerfuss/react-wordle">
           <i> this open source project</i>
        </a>
	  </p>
	  
    </BaseModal>
  )
}
