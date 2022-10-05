import winston from "winston";
import colors from "./colors";
import levels from "./levels";
import { formatProduction, formatDevelopment } from "./log.format";
import transports from "./transports";

winston.addColors(colors);

const logger = winston.createLogger({
  level: "trace",
  levels,
  transports,
});

if (process.env.NODE_ENV === "production") {
  logger.format = formatProduction;
} else {
  logger.format = formatDevelopment;
}

export default logger;
