import React, { FC } from 'react'
import { useTypedSelector } from '../../hooks/redux'
import { FiX } from 'react-icons/fi'
import LogItem from './LogItem/LogItem'

type TLoggerModalProps = {
  setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoggerModal: FC<TLoggerModalProps> = ({
  setIsLoggerOpen
}) => {
  const logs = useTypedSelector(state => state.logger.logArray);

  return (
    <div>
      <div>
        <div>
          <div>활동 기록</div>
          <FiX onClick={() => setIsLoggerOpen(false)} />
        </div>
        <div>
          {logs.map((log, index) => (
            <LogItem key={log.logId} logItem={log} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoggerModal
