/*
 * Copyright (C) 2021 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonos-plugin-funcs
 *
 * This file is part of Project Fonos
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import "../../config";
import {Command, flags} from "@oclif/command";
import express from "express";
import { cli } from "cli-ux";
const app = express();
app.use(express.static('public'))
const PORT = 5050;

export default class CreateCommand extends Command {
  static description = "this command starts a test phone.";

  static args = [{name: "name"}];
  static flags = {
    help: flags.help({char: "h"}),
    "unsecured": flags.string({char: "u", description: "start client unsecured"}),
    "port": flags.integer({char: "p", description: "overwrite default port"})
  };

  async run() {
    const {args, flags} = this.parse(CreateCommand);

    if (flags["unsecured"]) {
      // start
    }

    const port = flags["port"] || PORT
    app.listen(port, async() => {
      await cli.open(`http://localhost:${port}`);
      console.log("Started fonos phone at:")
      await cli.url(`Started fonos phone @ localhost:${port}`, `http://localhost:${port}`);
    })
  }
}
